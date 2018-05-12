import VError = require("verror");

export function newLogicError(msg: string, ...args: any[]) {
  const e = new VError({ name: "LogicError" }, msg, ...args);
  e.code = "GENERAL";
  e.status = 500;
  return e;
}

export function newLogicErrorCausedBy(
  cause: Error,
  msg: string,
  ...args: any[]
) {
  const e = new VError({ name: "LogicError", cause }, msg, ...args);
  e.code = "GENERAL";
  e.status = 500;
  return e;
}

export function newCodedLogicError(code: string, msg: string, ...args: any[]) {
  const e = new VError({ name: "LogicError" }, msg, ...args);
  e.code = code;
  e.status = 500;
  return e;
}

export function newOperationalError(msg: string, ...args: any[]) {
  const e = new VError({ name: "OperationalError" }, msg, ...args);
  e.code = "GENERAL";
  e.status = 500;
  return e;
}

export function newOperationalErrorCausedBy(
  cause: Error,
  msg: string,
  ...args: any[]
) {
  const e = new VError({ name: "OperationalError", cause }, msg, ...args);
  e.code = "GENERAL";
  e.status = 500;
  return e;
}

export function newHttpOperationalErrorCausedBy(
  cause: Error,
  status: number,
  msg: string,
  ...args: any[]
) {
  const e = new VError({ name: "OperationalError", cause }, msg, ...args);
  e.code = "GENERAL";
  e.status = status;
  return e;
}
