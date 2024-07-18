import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "purpose";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.purpose?.toString() || String(record.id);
};
