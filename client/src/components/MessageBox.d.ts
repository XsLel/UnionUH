import React from "react";

export default function MessageBox(props: {
  open: boolean;
  trigger: React.Component;
  header?: string;
  content: string;
  centeredContent?: boolean;
  onOK?: () => void;
  onCancel?: () => void;
}): JSX.Element;
