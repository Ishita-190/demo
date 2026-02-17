export const streetlights = `
asyncapi: '2.6.0'
info:
  title: Streetlights API
  version: '1.0.0'
channels:
  smartylighting/streetlights/1/0/event/{streetlightId}/lighting/measured:
    subscribe:
      message:
        contentType: application/json
        payload:
          type: object
          properties:
            lumens:
              type: integer
            sentAt:
              type: string
`;
