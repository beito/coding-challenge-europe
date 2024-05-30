"use client";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

interface CurrencyProps {

}

const Currency: React.FC<CurrencyProps> = ({ }) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Currency Converter</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Amount</Label>
                            <Input id="name" placeholder="placeholder" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">From</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">

                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
    );
};

export default Currency;
