export const sanitiseDetails = (details) => {
  let obj = structuredClone(details)
  delete(obj.id)
  delete(obj.user_id)
  delete(obj.created_at)
  return obj
}