import React from "react";
interface IProps {
  className?: string;
}
const Logo = (props: IProps) => {
  const {className} = props;
  return (
    <h1 className={`text-white font-bold text-center ${className}`}>Food<span className={'text-primary'}>tuck</span></h1>
  );
};

export default Logo;