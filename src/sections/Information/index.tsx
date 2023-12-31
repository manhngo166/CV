import data from "./data";
import InformationStyled from "./style";

const Information = () => {
    const renderContacts = data.contacts.map((contact, index) => {
        const { title, link, icon } = contact;
    
        return (
            <InformationStyled.Contact key={index}>
                <InformationStyled.ContactLink
                    href={link}
                    target="_blank"
                    title={title}
                    dangerouslySetInnerHTML={{__html: icon}}
                />
            </InformationStyled.Contact>
        )
    });

    const renderOptions = data.options.map((option, index) => {
        const { icon, text } = option;

        return (
            <InformationStyled.Option key={index}>
                <InformationStyled.OptionIcon dangerouslySetInnerHTML={{__html: icon}} />
                <InformationStyled.OptionText>{text}</InformationStyled.OptionText>
            </InformationStyled.Option>
        )
    })

    return (
        <InformationStyled.Wrap>
            <InformationStyled.Left>
                <InformationStyled.Position>{data.position}</InformationStyled.Position>
                <InformationStyled.Description>{data.description}</InformationStyled.Description>
                <InformationStyled.Options>{renderOptions}</InformationStyled.Options>
                <InformationStyled.Contacts>{renderContacts}</InformationStyled.Contacts>
            </InformationStyled.Left>
            <InformationStyled.Right>
                <InformationStyled.Avatar src={data.image} />
            </InformationStyled.Right>
        </InformationStyled.Wrap>
    )
};

export default Information;