// https://ui.aceternity.com/components/bento-grid

import { cn } from "@/lib/utils";

/**
 * A skewed grid layout with Title, description and a header component.
 *
 * @param className - Additional classes to add to the grid.
 * @param children - The child elements to be rendered within the grid.
 *
 * @author AceternityUI
 */
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * A grid item component for the BentoGrid.
 *
 * @param className - Additional classes to add to the grid item.
 * @param title - The title of the grid item, can be a string or a React node.
 * @param description - The description of the grid item, can be a string or a React node.
 * @param header - The header component to be displayed at the top of the grid item.
 * @param icon - The icon component to be displayed within the grid item.
 *
 * @author AceternityUI
 */
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-primary border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
