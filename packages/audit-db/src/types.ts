export interface AuditRecord {

  id: string;

  type: string;

  timestamp: string;

  payload: unknown;
}