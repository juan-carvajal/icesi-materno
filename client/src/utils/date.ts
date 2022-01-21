import { Timestamp } from 'firebase/firestore';

export function getTimeInterval (date?: Date | null) {

  if (!date) {
    return ''
  }

  let seconds = Math.floor((+Date.now() + - date) / 1000);
  let unit = 'segundo';
  let direction = 'Hace';
  if (seconds < 0) {
    seconds = -seconds;
    direction = 'Dentro de';
  }
  let value = seconds;
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = 'año';
  } else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = 'dia';
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = 'hora';
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = 'minuto';
  }
  if (value != 1)
    unit = unit + 's';
  return `${direction} ${value} ${unit}`
}

export function getTimeIntervalRaw (date?: Date | null) {

  if (!date) {
    return ''
  }

  let seconds = Math.floor((+Date.now() + - date) / 1000);
  let unit = 'segundo';
  if (seconds < 0) {
    seconds = -seconds;
  }
  let value = seconds;
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = 'año';
  } else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = 'dia';
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = 'hora';
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = 'minuto';
  }
  if (value != 1)
    unit = unit + 's';
  return `${value} ${unit}`
}

export function handleFirebaseDate (dateObject: Date | Timestamp | null | undefined) {
  if (!dateObject) {
    return null;
  }

  if ((dateObject as Timestamp).toDate) {
    return (dateObject as Timestamp).toDate()
  }

  return (dateObject as Date)
}
