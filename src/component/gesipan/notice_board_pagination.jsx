import './notice_board_pagination.css'

export default function Pagination() {
  return(
    // a href 달기
    <nav aria-label="게시판 페이지네이션">
      <ul className="pagination">
        <li className="page-item">&laquo;</li>
        <li className="page-item">1</li>
        <li className="page-item">2</li>
        <li className="page-item">3</li>
        <li className="page-item">4</li>
        <li className="page-item">5</li>
        <li className="page-item">&raquo;</li>
      </ul>
    </nav>
  )
};