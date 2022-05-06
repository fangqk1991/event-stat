import { EventType } from './EventType'

export interface EventOptions {
  eventType: EventType
  content: string
  visitor: string
}
