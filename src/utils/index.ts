import contentstack, { BaseEntry } from '@contentstack/delivery-sdk';


export const stack = contentstack.stack({
  apiKey: process.env.CONTENTSTACK_API_KEY ?? '',
  deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN ?? '',
  environment: process.env.CONTENTSTACK_ENVIRONMENT ?? ''
})

interface WebhookPageEntry extends BaseEntry {
  description: string;
  // other props
}

export const getWebhookPageEntry = async (): Promise<WebhookPageEntry> => {
  const entry = await stack
    .contentType("webhook_page")
    .entry('blt6d682bb55aa1a131')
    .fetch<WebhookPageEntry>();

  return entry
}