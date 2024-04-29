"use client";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { FloatButton, Switch, Button } from "antd";
import DatePicker from "./_components/DatePicker";
import Calendar from "./_components/Calendar";
import TimePicker from "./_components/TimePicker";

import "./style.css";

const Page = () => {
  const [open, setOpen] = useState(true);

  const onChange = (checked: boolean) => {
    setOpen(checked);
  };
  return (
    <div className="">
      <Button type="primary">Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="primary" danger loading>
        Primary
      </Button>
      <>
        <FloatButton.Group
          open={open}
          trigger="click"
          style={{ right: 24 }}
          icon={<CustomerServiceOutlined />}
        >
          <FloatButton />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
        <Switch onChange={onChange} checked={open} style={{ margin: 16 }} />
      </>
      <DatePicker />
      <TimePicker />
    </div>
  );
};

export default Page;
