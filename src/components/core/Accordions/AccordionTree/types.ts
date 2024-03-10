export type TAccordionData = {
  id?: number | string
  title: string
  children?: TAccordionData[]
}

export type TAccordionProps = {
  accordion: TAccordionData[]
}
