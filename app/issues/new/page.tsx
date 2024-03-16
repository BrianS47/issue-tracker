"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Issue Title" />
      </TextField.Root>
      <TextArea placeholder="Enter Description for your issue" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
