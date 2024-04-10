import "./CodeKlammern.scss";

const CodeKlammern = (props) => {
    const { content, children } = props;
    return (
        <div className="code-klammern">
            <p className="html-style-tags">&lt;{content}&gt;</p>
            <div className="content">
                {children}
            </div>
            <p className="html-style-tags closed">&lt;/{content}&gt;</p>
        </div>
    );
}

export default CodeKlammern;