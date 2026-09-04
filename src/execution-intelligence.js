// SOVRAIL AI v3 execution intelligence core.
// Provider adapters feed measured telemetry into these pure functions.

export function totalSuccessfulOutcomeCost(x={}) {
  const direct=Math.max(0,+x.directCostUsd||0);
  const context=Math.max(0,+x.contextReloadCostUsd||0);
  const retryP=Math.min(1,Math.max(0,+x.retryProbability||0));
  const retry=Math.max(0,+(x.expectedRetryCostUsd??direct)||0)*retryP;
  const recovery=Math.max(0,+x.expectedRecoveryCostUsd||0);
  const latency=Math.max(0,+x.latencyPenaltyUsd||0);
  const reuse=Math.max(0,+x.recipeReuseSavingsUsd||0);
  return +(Math.max(0,direct+context+retry+recovery+latency-reuse).toFixed(6));
}

export function rankExecutionRoutes(candidates=[]) {
  return candidates.map(c=>({...c,totalSuccessfulOutcomeCostUsd:totalSuccessfulOutcomeCost(c)}))
    .sort((a,b)=>a.totalSuccessfulOutcomeCostUsd-b.totalSuccessfulOutcomeCostUsd);
}

export function createGearShiftPlan({task,gears=[1,3,5],modelsByGear={}}={}) {
  return {task,method:'same-task controlled comparison',gears:gears.map(gear=>({gear,model:modelsByGear[gear]||null,status:'pending',requiredMeasurements:['output','latency_ms','direct_cost_usd','total_successful_outcome_cost_usd','quality_evaluation']})),rule:'Do not claim actual outcome differences until each selected gear has been run under equivalent task/context conditions.'};
}

export function createGearShiftReport({task,runs=[],evaluator=null}={}) {
  const rows=runs.map(r=>({gear:r.gear,model:r.model,provider:r.provider,output:r.output,latencyMs:+r.latencyMs||0,directCostUsd:+r.directCostUsd||0,totalSuccessfulOutcomeCostUsd:totalSuccessfulOutcomeCost(r),quality:evaluator?evaluator(r):r.quality??null,measured:true}));
  return {task,comparisonType:'measured',rows,fastest:rows.length?[...rows].sort((a,b)=>a.latencyMs-b.latencyMs)[0].gear:null,lowestTotalCost:rows.length?[...rows].sort((a,b)=>a.totalSuccessfulOutcomeCostUsd-b.totalSuccessfulOutcomeCostUsd)[0].gear:null,note:'Quality is task-specific. A lower gear is recommended only when it satisfies the task quality/policy threshold; lowest token price alone is not the objective.'};
}

export function authorizeComputerAction({action,allowed=[],denied=[],requiresHumanApproval=[]}={}) {
  const a=String(action||'').toLowerCase();
  const norm=x=>x.map(v=>String(v).toLowerCase());
  if(norm(denied).includes(a)) return {approved:false,state:'denied'};
  if(norm(requiresHumanApproval).includes(a)) return {approved:false,state:'approval-required'};
  if(allowed.length&&!norm(allowed).includes(a)) return {approved:false,state:'not-authorized'};
  return {approved:true,state:'authorized'};
}
