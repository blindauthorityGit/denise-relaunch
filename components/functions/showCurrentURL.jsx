import { useRouter } from "next/router";

export default function showCurrentUrl() {
    const router = useRouter();
    const currentUrl = router.asPath;

    // Remove the leading "/" from the current URL
    const formattedUrl = currentUrl.substring(1);

    return formattedUrl;
}
