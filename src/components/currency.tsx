"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";

interface CurrencyProps {

}

const Currency: React.FC<CurrencyProps> = ({ }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <p></p>
            </CardContent>
            <CardFooter>
                <p></p>
            </CardFooter>
        </Card>
    );
};

export default Currency;
