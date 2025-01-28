import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TbBrandGithub, TbBrandLinkedin, TbMail, TbSend } from "react-icons/tb";

export function ConnectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm">
          Let&apos;s connect!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Let&apos;s Connect!</DialogTitle>
          <DialogDescription>
            Feel free to reach out through any of these channels.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-4 py-4">
          <a
            href="https://github.com/eduardohilariodev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <TbBrandGithub className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/eduardohilariodev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <TbBrandLinkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:eduardohilariodev@pm.me"
            className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <TbMail className="h-6 w-6" />
          </a>
        </div>
        <div className="my-4 border-t border-gray-200 dark:border-gray-800" />
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Input placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Input type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <Textarea placeholder="Your message" />
          </div>
          <Button type="submit" className="w-full">
            <TbSend className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
