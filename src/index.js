require('dotenv-safe').load()

export const sum = (a, b) => a + b

export const truth = () =>
  `Something we know: ${process.env.SUPER_SECRET_ENV_VAR}`
