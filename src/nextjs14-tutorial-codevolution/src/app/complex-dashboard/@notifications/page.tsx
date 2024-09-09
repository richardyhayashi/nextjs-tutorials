import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <br />
      <Link href="/complex-dashboard/archived">Archive</Link>
    </Card>
  );
}
