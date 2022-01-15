export interface iCard {
  color: string
  note: iNote
}

export interface iLabel {
  text: string
}

export interface iColorSelect {
  color: string | null | undefined
  handle: Function
}

export interface iNote {
  id: number
  title: string
  comment: string
  color: string
  date: string | null | undefined
}
