import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";


const Landing: React.FC = () => {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page - Button Variants</h1>
      <Card />

      <div className="space-y-4">
        <div className="space-x-4">
          <Button title="Small - sm" size="small" shape="rounded-sm" styles="" />
          <Button title="Small - md" size="small" shape="rounded-md" styles="" />
          <Button title="Small - full" size="small" shape="rounded-full" styles="" />
        </div>

        <div className="space-x-4">
          <Button title="Medium - sm" size="medium" shape="rounded-sm" styles="" />
          <Button title="Medium - md" size="medium" shape="rounded-md" styles="" />
          <Button title="Medium - full" size="medium" shape="rounded-full" styles="" />
        </div>

        <div className="space-x-4">
          <Button title="Large - sm" size="large" shape="rounded-sm" styles="" />
          <Button title="Large - md" size="large" shape="rounded-md" styles="" />
          <Button title="Large - full" size="large" shape="rounded-full" styles="" />
        </div>
      </div>
    </div>
  );
};



export default Landing;
