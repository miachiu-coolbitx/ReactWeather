import styled from 'styled-components';
import { color } from 'styled-system';
import flex from '../../style/flex';
import colors from '../../style/colors';
import { Typography } from '@material-ui/core';

export const Wrapper = styled.div``;

export const Card = styled.div`
  padding: 15px;
  background-color: ${colors.hint};
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
  ${flex.spaceBetween};
  ${flex.centerHorizontalV};
`;

export const Row2 = styled.div`
  ${flex.horizontal};
  ${flex.centerHorizontalV};
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
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjc1NjNjO30uY2xzLTJ7ZmlsbDojZWZjYzAwO30uY2xzLTN7ZmlsbDojNDJiYzU5O30uY2xzLTR7ZmlsbDojMGQ5OGZmO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU0Ljg4LDkuMTNBNDUuOCw0NS44LDAsMCwwLDkuMTMsNTQuODhoOC43MWEzNy4wOCwzNy4wOCwwLDAsMSwzNy0zNyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU0Ljg4LDE3Ljg0YTM3LjA4LDM3LjA4LDAsMCwwLTM3LDM3aDguNzFBMjguMzUsMjguMzUsMCwwLDEsNTQuODgsMjYuNTUiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik01NC44OCwyNi41NUEyOC4zNSwyOC4zNSwwLDAsMCwyNi41NSw1NC44OGg4LjcxQTE5LjYzLDE5LjYzLDAsMCwxLDU0Ljg4LDM1LjI3Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNTQuODgsMzUuMjdBMTkuNjMsMTkuNjMsMCwwLDAsMzUuMjcsNTQuODhINDRBMTAuODksMTAuODksMCwwLDEsNTQuODgsNDQiLz48L3N2Zz4=');
  background-position: right center;
  ${Bg}
`;

export const Text = styled.div`
  padding: 4px 0;
  font-size: 14px;
  color: ${colors.font};
  ${color}
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
  opacity: 0.3;
  cursor: pointer;
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
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMGJhZWZmO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ5LDM4YTE3LjUsMTcuNSwwLDAsMS0zNSwwQzE0LDIyLjcsMjguMjIsOC40OCwzMS41LDguNDhTNDksMjIuNyw0OSwzOFoiLz48L3N2Zz4=');
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
