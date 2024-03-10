import { FC, useState } from 'react';
import type { TAccordionData } from './types';

import ArrowIcon from '@/assets/arrow.svg';

const renderDeepTree = (children?: TAccordionData[]) => {
  return children?.map((child, i) => <AccordionTreeItem {...child} key={i} />);
};

export const AccordionTreeItem: FC<TAccordionData> = ({ children, title }) => {
  const [selected, setselected] = useState<boolean>(false);

  const toggle = (): void => {
    setselected(prev => !prev);
  };

  const hasChidlren = (children?: TAccordionData[]): boolean => {
    return Array.isArray(children) && children.length > 0;
  };


  return (
    <div>
      <p
        onClick={toggle}
        className={`flex items-center gap-1 select-none ${hasChidlren(children) ? 'cursor-pointer' : ''}`}
      >
        <span>
          {title}
        </span>
        {
          hasChidlren(children) ?
            <img
              src={ArrowIcon}
              alt="arrow"
              className={`transition ${selected ? 'rotate-90' : 'rotate-0'}`}
            />
            :
            null
        }
      </p>
      <div className={`ml-5 transition-all duration-300 overflow-y-hidden ${
        selected ? 'max-h-screen opacity-100' : 'min-h-0 max-h-0 opacity-0'
      }`}>
        {hasChidlren(children) ? (
          renderDeepTree(children)
        ) : null}
      </div>
    </div>
  );
};
