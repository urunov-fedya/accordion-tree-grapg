import { FC } from 'react';
import { TAccordionProps } from './types';
import { AccordionTreeItem } from './AccordionTreeItem';

export const AccordionTree: FC<TAccordionProps> = ({ accordion }) => {
  return (
    <div>
      {accordion.map((acc, i) => (<AccordionTreeItem {...acc} key={i} />))}
    </div>
  );
};
