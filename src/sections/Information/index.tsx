import data from "./data";
import {
    Information as InformationWrap,
    InformationDescription, InformationAddress,
    InformationContacts,
    InformationContact,
    InformationContactLink,
    InformationAddressText,
    InformationAddressIcon,
    InformationAvatar
} from "./style";

const Information = () => {
    const renderContacts = data.contacts.map(contact => <ContactItem {...contact} />);

    return (
        <InformationWrap>
            <div className="row">
                <div className="col-md-9">
                    <InformationDescription>{data.description}</InformationDescription>
                    <InformationAddress>
                        <InformationAddressIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe h-3 w-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                        </InformationAddressIcon>
                        <InformationAddressText>{data.address}</InformationAddressText>
                    </InformationAddress>
                    <InformationContacts>{renderContacts}</InformationContacts>
                </div>
                <div className="col-md-3">
                    <InformationAvatar src={data.image} />
                </div>
            </div>
        </InformationWrap>
    )
};

const ContactItem = ({ icon, link, title }: any) => {
    return (
        <InformationContact>
            <InformationContactLink
                href={link}
                target="_blank"
                title={title}
                dangerouslySetInnerHTML={{__html: icon}}
            />
        </InformationContact>
    )
};


export default Information;