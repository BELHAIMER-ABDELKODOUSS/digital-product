import * as React from "react";

interface EmailTemplateProps {
  confirmLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  confirmLink,
}) => (
  <div>
    <h1>
      Confirm Your Registration, <a href={confirmLink}>Here</a> !
    </h1>
  </div>
);
