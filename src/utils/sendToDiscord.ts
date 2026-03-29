type DiscordLogOptions = {
  channel: string
  error?: string
  user?: string
  description?: string
}

type SendToDiscordResult = {
  error: string | null
}

const discordWebhookLog: Record<string, string> = {
  logs: 'https://discord.com/api/webhooks/1347864758774267965/aAxTxL4EA8A3a7wlb-hDBh5OQWUN1_HWUvQDlxONnbQ7OsikVGwP9buFxNa0cE9ZnXwy',
}

export const sendToDiscord = async ({
  channel,
  user,
  error,
  description,
}: DiscordLogOptions): Promise<SendToDiscordResult> => {
  const discordWebhookUrl = discordWebhookLog.logs
  if (!discordWebhookUrl) {
    console.error('No Discord webhook URL found')
    return { error: 'No Discord webhook URL found' }
  }

  const discordEmbedMessage = {
    embeds: [
      {
        title: channel,
        color: error ? 16711680 : 5814783,
        fields: [
          { name: 'User', value: user || '', inline: false },
          {
            name: 'Description',
            value: description || 'No description provided',
            inline: false,
          },
        ],
        ...(error && { footer: { text: `Error: ${error}` } }),
      },
    ],
  }

  try {
    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordEmbedMessage),
    })

    if (!discordResponse.ok) {
      const responseBody = await discordResponse.text()
      console.error(
        `Error sending message to Discord: ${discordResponse.statusText}. Response: ${responseBody}`,
      )
      return {
        error: `Discord error: ${discordResponse.statusText}. Response: ${responseBody}`,
      }
    }

    return { error: null }
  } catch (err) {
    console.error(`Exception occurred while sending to Discord: ${err}`)
    return { error: `Exception: ${err}` }
  }
}


