import contentstack, { BaseEntry } from '@contentstack/delivery-sdk';


export const stack = contentstack.stack({
  apiKey: process.env.CONTENTSTACK_API_KEY ?? '',
  deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN ?? '',
  environment: process.env.CONTENTSTACK_ENVIRONMENT ?? '',
  live_preview: {
    preview_token: process.env.CONTENTSTACK_LIVE_PREVIEW ?? '',
    enable: process.env.OUTPUT_MODE === 'standalone',
    host: "rest-preview.contentstack.com"
  },
})

interface WebhookPageEntry extends BaseEntry {
  description: string;
  // other props
}

export const getWebhookPageEntry = async (): Promise<WebhookPageEntry> => {
  const entry = await stack
    .contentType("webhook_page")
    .entry('blt0a26c0eadcea4067')
    .fetch<WebhookPageEntry>();

  console.log("EXECUTING QUERY", entry.description)

  return entry
}

export const setLivePreviewQueryParams = (queryParams: any) => {
  if (queryParams?.live_preview) {
    stack.livePreviewQuery(queryParams)
  }
}