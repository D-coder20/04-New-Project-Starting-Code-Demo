import { ComponentPropsWithoutRef } from "react";

type ButtonProps = { href?: never } & ComponentPropsWithoutRef<"button">;

type AnchorProps = { href?: string } & ComponentPropsWithoutRef<"a">;

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return (
      <p>
        <a {...props}>A Link</a>
      </p>
    );
  }
  return (
    <p>
      <button {...props}></button>
    </p>
  );
}
