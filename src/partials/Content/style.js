import styled from 'styled-components';
import { typography, flexbox, color } from 'styled-system';
import flex from '../../style/flex';
import colors from '../../style/colors';

export const Wrapper = styled.div``;

export const Card = styled.div`
  padding: 15px;
  background-color: ${colors.hint};
  border-radius: 8px;
`;

export const Location = styled.div`
  padding: 4px 0;
  font-size: 24px;
  color: ${colors.primary};
`;

export const Status = styled.div`
  padding: 4px 0;
  font-size: 14px;
  color: ${colors.secondary};
`;

export const Row = styled.div`
  ${flex.horizontal};
  ${flex.centerHorizontalV};
  ${flexbox}
`;

export const SmallTxt = styled.span`
  font-size: 24px;
`;

export const Temperture = styled.div`
  font-size: 3.2rem;
  color: ${colors.primary};
`;

const Bg = `
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Weather = styled.div`
  width: 85px;
  height: 85px;
  margin-right: -10px;
  ${Bg}
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjc1NjNjO30uY2xzLTJ7ZmlsbDojZWZjYzAwO30uY2xzLTN7ZmlsbDojNDJiYzU5O30uY2xzLTR7ZmlsbDojMGQ5OGZmO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU0Ljg4LDkuMTNBNDUuOCw0NS44LDAsMCwwLDkuMTMsNTQuODhoOC43MWEzNy4wOCwzNy4wOCwwLDAsMSwzNy0zNyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU0Ljg4LDE3Ljg0YTM3LjA4LDM3LjA4LDAsMCwwLTM3LDM3aDguNzFBMjguMzUsMjguMzUsMCwwLDEsNTQuODgsMjYuNTUiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik01NC44OCwyNi41NUEyOC4zNSwyOC4zNSwwLDAsMCwyNi41NSw1NC44OGg4LjcxQTE5LjYzLDE5LjYzLDAsMCwxLDU0Ljg4LDM1LjI3Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNTQuODgsMzUuMjdBMTkuNjMsMTkuNjMsMCwwLDAsMzUuMjcsNTQuODhINDRBMTAuODksMTAuODksMCwwLDEsNTQuODgsNDQiLz48L3N2Zz4=');
  background-position: right center;
`;

export const Text = styled.div`
  padding: 4px 0;
  font-size: 14px;
  color: ${colors.font};
  ${typography}
`;

const SmallIcon = `
  display: inline-block;
  width: 24px;
  height: 24px;
`;

export const Refresh = styled.div`
  ${SmallIcon}
  ${Bg}
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNS4wMzIsMjYuMTZjMi44ODQtMi44ODMsNC4xODQtNi43NCwzLjkyOC0xMC41MWMtMS41MTEsMC4wMTMtMy4wMjEsMC4wMjEtNC41MzEsMC4wMzQgIGMwLjI1NCwyLjU5OS0wLjYwMyw1LjI4Ny0yLjU5NCw3LjI3N2MtMy41MzUsMy41MzMtOS4yNjMsMy41MzMtMTIuNzk2LDBjLTMuNTM0LTMuNTMzLTMuNTM0LTkuMjYsMC0xMi43OTQgIGMzLjAxNS0zLjAxNiw3LjYyNS0zLjQ0NiwxMS4xMDktMS4zMTRjLTEuMTgxLDEuMTY3LTIuNTcsMi41NDktMi41NywyLjU0OWMtMSwxLjA2MiwwLjAxNiwxLjc2NiwwLjY5LDEuNzdoOC44MjggIGMwLjMzOCwwLDAuNjExLTAuMjc0LDAuNjEyLTAuNjEyVjMuODA0YzAuMDQxLTAuODI1LTAuODY1LTEuNTkxLTEuNzU2LTAuN2MwLDAtMS40OTUsMS40OC0yLjUzMywyLjUwOSAgQzE4LjExMiwxLjczNiwxMC42MzQsMi4xNzUsNS44NDEsNi45NjdjLTUuMyw1LjMtNS4zLDEzLjg5MiwwLDE5LjE5M0MxMS4xNDEsMzEuNDU5LDE5LjczMywzMS40NTksMjUuMDMyLDI2LjE2eiIgZmlsbD0iIzUxNTE1MSIgaWQ9IlJlZnJlc2giLz48L3N2Zz4=');
  background-position: center;
  background-size: 24px;
  opacity: 0.3;
  cursor: pointer;
  margin-left: 8px;
`;

export const Aimg = styled.div`
  ${SmallIcon}
  margin-right: 10px;
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ye2ZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6M3B4O30uY2xzLTF7c3Ryb2tlOiNhNWE5YWE7fS5jbHMtMntzdHJva2U6I2I5YzFjNjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05LjUsNDAuNUgzNi4xN2E1LjUsNS41LDAsMCwxLDUuNSw1LjVoMGE1LjUsNS41LDAsMCwxLTUuNSw1LjUiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MS41LDE2LjVBMy41LDMuNSwwLDAsMSw0NSwyMGgwYTMuNSwzLjUsMCwwLDEtMy41LDMuNUg5LjUiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MC41LDMyLjVINTNhMi42NywyLjY3LDAsMCwxLDIuNjcsMi42N2gwQTIuNjcsMi42NywwLDAsMSw1MywzNy44MyIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjI2LjUiIHgyPSIzNC41IiB5MT0iMzIuNSIgeTI9IjMyLjUiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSI5LjUiIHgyPSIyMC41IiB5MT0iMzIuNSIgeTI9IjMyLjUiLz48L3N2Zz4=');
  background-position: left center;
  ${Bg}
`;

export const Rimg = styled.div`
  ${SmallIcon}
  margin-right: 10px;
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjNweDt9LmNscy0xe3N0cm9rZTojMGJhZWZmO30uY2xzLTJ7c3Ryb2tlOiNiOWMxYzY7fS5jbHMtM3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy00e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtMik7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEsIDAsIDAsIDEsIDUwOS45NywgMCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iNDkwLjcyIiB4Mj0iNDY5LjYzIiB5MT0iNDYuMzkiIHkyPSIxOS4wOCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjJmMmYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjY2ZjZmNmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLCAtMSwgLTEsIDAsIDIwOC45MSwgNDE4LjU2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgeDE9IjM4My4zOCIgeDI9IjM5NC45OSIgeTE9IjE1Ni42NCIgeTI9IjE3NC4yOSI+PHN0b3Agb2Zmc2V0PSIwLjAyIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGUvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjI2LjUiIHgyPSIyNi41IiB5MT0iNDguNSIgeTI9IjUxLjUiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIyNi41IiB4Mj0iMjYuNSIgeTE9IjU1LjUiIHkyPSI1NS41Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMzIuNSIgeDI9IjMyLjUiIHkxPSI1MC41IiB5Mj0iNTMuNSIvPjxsaW5lIGNsYXNzPSJjbHMtMiIgeDE9IjMyLjUiIHgyPSIzMi41IiB5MT0iNTcuNSIgeTI9IjU3LjUiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzOC41IiB4Mj0iMzguNSIgeTE9IjQ4LjUiIHkyPSI1MS41Ii8+PGxpbmUgY2xhc3M9ImNscy0yIiB4MT0iMzguNSIgeDI9IjM4LjUiIHkxPSI1NS41IiB5Mj0iNTUuNSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIzLjY2LDkuOWExNy40OSwxNy40OSwwLDAsMSwxNS40Nyw5LjMyQTEzLjc1LDEzLjc1LDAsMSwxLDQ2LDQ0Ljg0bC0yMi4zOS4wNmExNy41LDE3LjUsMCwwLDEsMC0zNVoiLz48Y2lyY2xlIGNsYXNzPSJjbHMtNCIgY3g9IjQ2LjA1IiBjeT0iMzEuMDkiIHI9IjEzLjc1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjcyIDY3LjA4KSByb3RhdGUoLTc0LjM5KSIvPjwvc3ZnPg==');
  background-position: left center;
  ${Bg}
`;
export const Himg = styled.div`
  ${SmallIcon}
  margin-right: 10px;
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMGJhZWZmO30uY2xzLTJ7ZmlsbDojZTBlMGUwO30uY2xzLTN7ZmlsbDpub25lO3N0cm9rZTojZTBlMGUwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUwLDM4LjM2YTE4LjUsMTguNSwwLDAsMS0zNywwQzEzLDIyLjE3LDI4LDcuMTQsMzEuNSw3LjE0UzUwLDIyLjE3LDUwLDM4LjM2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI5LjMsMzQuMDdjMCwzLjMyLTIuMSw1LjA1LTQuNCw1LjA1cy00LjMyLTEuODEtNC4zMi00Ljc5LDEuNzMtNSw0LjQ0LTVTMjkuMywzMS4zNiwyOS4zLDM0LjA3Wm0tNiwuMTdjMCwxLjY2LjU2LDIuODYsMS42NCwyLjg2czEuNTYtMS4wNywxLjU2LTIuODZjMC0xLjYxLS40NC0yLjg2LTEuNTktMi44NlMyMy4zNCwzMi42NiwyMy4zNCwzNC4yNFpNNDMsNDAuNjdjMCwzLjMyLTIuMSw1LjA1LTQuNCw1LjA1cy00LjMtMS44MS00LjMyLTQuNzksMS43My01LDQuNDQtNVM0MywzOCw0Myw0MC42N1ptLTUuOTMuMTdjMCwxLjY2LjU0LDIuODYsMS42MSwyLjg2czEuNTYtMS4wNywxLjU2LTIuODZjMC0xLjYxLS40Mi0yLjg2LTEuNTYtMi44NlMzNy4xMSwzOS4yNSwzNy4xMSw0MC44NFoiLz48bGluZSBjbGFzcz0iY2xzLTMiIHgxPSIzNi43IiB4Mj0iMjcuNDUiIHkxPSIyOS42OSIgeTI9IjQ0LjcyIi8+PC9zdmc+');
  background-position: left center;
  ${Bg}
`;
