import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-luxury-dark px-4">
            <div className="max-w-md w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                </div>

                <h1 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
                    Thank You!
                </h1>

                <p className="text-foreground/70 text-lg mb-8">
                    Your enquiry has been submitted successfully. Our team will get back to you shortly.
                </p>

                <Link to="/">
                    <Button
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base transition-smooth shadow-luxury"
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
