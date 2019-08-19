import R = require("ramda");

export const isOwner = (id: string) => (process.env.OWNERS || "140862798832861184")
  .split(",")
  .some(R.equals(id));