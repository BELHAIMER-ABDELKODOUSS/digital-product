import * as React from "react";

interface EmailTemplateProps {
  confirmLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmLink,
}) => (
  <div>
    <h1>Click Here, {confirmLink}!</h1>
  </div>
);
