import { Card } from "react-bootstrap"
import { BookmarkFill, CalendarEvent, Newspaper, PeopleFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const JobsCardProfile = () => {
    return (
        <Card className="mt-1 d-sm-none d-md-block">
          <div className="m-2">
            <BookmarkFill />
            <span className="ms-2">
              <Link
                to="/profile/setting"
                className="text-dark text-decoration-none"
                state={3}
              >
                Elementi salvati
              </Link>
            </span>
          </div>
          <div className="m-2">
            <PeopleFill />
            <span className="ms-2">Gruppi</span>
          </div>
          <div className="m-2">
            <Newspaper />
            <span className="ms-2">Newsletter</span>
          </div>
          <div className="m-2">
            <CalendarEvent />
            <span className="ms-2">Eventi</span>
          </div>
        </Card>
    )
}

export default JobsCardProfile