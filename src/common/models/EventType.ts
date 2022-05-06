import { Descriptor } from '@fangcha/tools'

export enum EventType {
  Hyperlink = 'Hyperlink',
}

const values = [EventType.Hyperlink]

const describe = (code: EventType) => {
  return code
}

export const EventTypeDescriptor = new Descriptor(values, describe)
