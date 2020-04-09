import { createUseStyles } from "react-jss"

export const appStyles = createUseStyles(theme => ({
    maxWidth: {
        margin: "0 auto",
        width: "100%",
        maxWidth: "1024px",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "1024px",
        alignItems: "center",
        padding: "5% 5%",
    }
}))