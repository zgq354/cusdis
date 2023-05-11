
const defaultLocale = {
  powered_by: 'Comments powered by Cusdis',
  post_comment: 'Comment',
  loading: 'Loading',

  // comment
  email: 'Email (optional)',
  nickname: 'Nickname',
  reply_placeholder: 'Reply...',
  reply_btn: 'Reply',
  sending: 'sending...',

  // reply
  mod_badge: 'MOD',
  content_is_required: 'Content is required',
  nickname_is_required: 'Nickname is required',

  comment_has_been_sent:
    'Your comment has been sent. Please wait for approval.',
};

export function t(key) {
  const LOCALE_KEY = 'CUSDIS_LOCALE'

  const locale = window[LOCALE_KEY] || defaultLocale;

  const content = locale[key]
  if (!locale[key]) {
    console.warn(
      '[cusdis]',
      'translation of language key',
      `'${key}'`,
      'is missing.',
    )
  }
  return content
}
