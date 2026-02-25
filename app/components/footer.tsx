const Footer = () => {
    return (
        <footer className="bg-mist-800 py-10 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-white text-sm">
                    © {new Date().getFullYear()} GreenClean — Land Cleaning & Garden Care. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
