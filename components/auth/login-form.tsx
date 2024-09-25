import React from "react";
import { AuthCard } from "./auth-card";

export const LoginForm = () => {
  return (
      <div>
          
      <AuthCard
        cardTitle="Welcom back!"
        backButtonHref="/auth/register"
        backButtonLable="Create New Account"
        showSocials
      >
        <div>
          <h3>hey</h3>
        </div>
      </AuthCard>
    </div>
  );
};
