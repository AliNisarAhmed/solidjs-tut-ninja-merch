import type { ParentComponent } from "solid-js";

type Props = {
  rounded: boolean;
  flat: boolean;
};

export const Card: ParentComponent<Props> = (props) => (
  <div
    class="bg-white p-4 text-center"
    classList={{
      "rounded-md": props.rounded,
      "shadow-md": !props.flat,
    }}
  >
    {props.children}
  </div>
);
