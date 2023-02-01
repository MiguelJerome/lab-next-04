export default function Menu({setPage}) {
    return <nav>
        <ul>
            <li>
                <a href="#" onClick={() => setPage('images')}>Images</a>
            </li>
            <li>
                <a href="#" onClick={() => setPage('test')}>Test</a>
            </li>
        </ul>
    </nav>
}