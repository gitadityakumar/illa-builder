import { CSSProperties, FC } from "react"
import { Button } from "@illa-design/react"
import { AgentItem } from "@/page/App/components/Actions/ActionGenerator/AiAgentSelector"
import {
  contentStyle,
  coverStyle,
  leftContentStyle,
  nameStyle,
} from "@/page/App/components/Actions/ActionGenerator/AiAgentSelector/MarketListItem/style"
import { containerStyle, descStyle } from "./style"

interface AgentListItemProps {
  style?: CSSProperties
  item: AgentItem
  onClickCreateAction: (id: string) => void
}
export const AgentListItem: FC<AgentListItemProps> = (props) => {
  const { item } = props

  return (
    <div css={containerStyle}>
      <div css={leftContentStyle}>
        <img css={coverStyle} src={item.cover} alt="cover" />
        <div css={contentStyle}>
          <div css={nameStyle}>{item.name}</div>
          <div css={descStyle}>{item.description}</div>
        </div>
      </div>
      <Button colorScheme="grayBlue">Select</Button>
    </div>
  )
}

AgentListItem.displayName = "AgentListItem"
