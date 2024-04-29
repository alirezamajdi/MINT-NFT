import * as React from "react";
import type { Moment } from "moment";

import DatePicker from "./DatePicker";

export interface TimePickerProps extends Omit<any, "picker"> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (
  <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimePicker.displayName = "TimePicker";

export default TimePicker;
