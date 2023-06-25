import { ContentRowTop } from "./ContentRowTop"
import { Details } from "./Detail/Details"
import { Footer } from "./Footer"
import { TopBar } from "./TopBar"

export const ContentWrapper = () => {
    return (
    <div id="content-wrapper" className="d-flex flex-column">

<div id="content">
    <TopBar />
    <ContentRowTop />
    <Details/>
</div>
    <Footer/>
</div>
    )
}