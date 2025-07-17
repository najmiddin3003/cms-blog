import { Button } from "@/components/ui/button";
import { getReadingTime } from "@/lib/utils";
import { getDetailedBlog } from "@/service/blog.service";
import {format} from "date-fns"
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Dot,
  Facebook,
  Link2,
  Linkedin,
  Minus,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function SlugPage({ params }: { params: { slug: string } }) {

  const blog = await getDetailedBlog(params.slug)

  return (
    <div className="pt-[15vh] max-w-5xl mx-auto">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-creteRound">
        {blog.title  }
      </h1>

      <div className="flex items-center flex-wrap max-md:justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <Image
            src={blog.author.image.url}
            alt="author"
            width={30}
            height={30}
            className="object-cover rounded-sm"
          />
          <p>by {blog.author.name}</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <p>{getReadingTime(blog.content.html)} min read</p>
        </div>
        <Minus />
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5" />
          {format(new Date(blog.createdAt), "MMM dd, yyyy")}
        </div>
      </div>

      <Image
        src={blog.image.url}
        alt="alt"
        width={`1120`}
        height={`595`}
        className="mt-4 rounded-md"
      />

      <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase text-muted-foreground">Share</p>
            <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
              <Button size={"icon"} variant={"outline"}>
                <Twitter />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Facebook />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Linkedin />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Send />
              </Button>
              <Button size={"icon"} variant={"outline"}>
                <Link2 />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 prose lg:prose-xl dark:prose-invert max-w-none">
          <p></p>
          <table>
            <tbody>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Segment</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>Long-fruited</strong>
                  </h5>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Purpose</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>For fresh consumption and processing</strong>
                  </h5>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Precocity</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>
                      Early ripening, 60-63 days after planting seedlings
                    </strong>
                  </h5>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Plant</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>Vigorous, open</strong>
                  </h5>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Fruit</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>Elongated teardrop-shaped, with dense pulp</strong>
                  </h5>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Color</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>Dark purple to black</strong>
                  </h5>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Weight</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>200-250 g</strong>
                  </h5>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">
                  <h5>
                    <em>
                      <strong>Taste</strong>
                    </em>
                  </h5>
                </td>
                <td className="py-2">
                  <h5>
                    <strong>Good</strong>
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <blockquote className="mt-10">
            <strong className="border-l-5 py-1 pl-3 text-2xl">
              <em>ADVANTAGES</em>
            </strong>
          </blockquote>
          <ul>
            <li>
              <div className="py-3 flex items-center gap-1">
                <Dot className="size-7 text-muted-foreground" />
                <strong>Early ripeness</strong>
              </div>
            </li>
            <li>
              <div className="pb-3 flex items-center gap-1">
                <Dot className="size-7 text-muted-foreground" />
                <strong>Very high yield potential</strong>
              </div>
            </li>
            <li>
              <div></div>
              <div className="pb-3 flex items-center gap-1">
                <Dot className="size-7 text-muted-foreground" />
                <strong>Attractive fruits</strong>
              </div>
            </li>
            <li>
              <div></div>
              <div className="pb-3 flex items-center gap-1">
                <Dot className="size-7 text-muted-foreground" />
                <strong>Great for slicing</strong>
              </div>
            </li>
          </ul>
          <blockquote></blockquote>

          <blockquote className="mt-10">
            <strong className="border-l-5 py-1 pl-3 text-2xl">
              <em>RECOMMENDATIONS FOR GROWING</em>
            </strong>
          </blockquote>
          <ul>
            <li>
              <div className="py-3 flex items-center gap-1">
                <Dot className="size-7 text-muted-foreground" />
                <strong>Designed for cultivation in open ground,</strong>
              </div>
              <div className="pb-3 flex items-center gap-1">
                <Dot className="size-7 text-muted-foreground" />
                <strong>as well as in plastic greenhouses</strong>
              </div>
            </li>
          </ul>
          <p></p>
        </div>
      </div>

      <div className="flex mt-6 gap-6 items-center max-md:flex-col">
        <Image
          src={blog.author.image.url}
          alt="author"
          width="155"
          height="155"
          className="rounded-md max-md:self-start"
        />
        <div className="flex-1 flex flex-col space-y-4">
          <h2 className="text-3xl font-creteRound">{blog.author.name}</h2>
          <p className="line-clamp-2 text-muted-foreground">
            {blog.author.bio}
          </p>
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:text-blue-500 underline transition-colors"
          >
            <span>See all posts by this author</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SlugPage;
