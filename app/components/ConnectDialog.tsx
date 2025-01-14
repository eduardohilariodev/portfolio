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
        <Button
          variant="default"
          size="sm"
        >
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
        <div className="flex gap-4 justify-center py-4">
          <a
            href="https://github.com/eduardohilariodev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <TbBrandGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/eduardohilariodev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <TbBrandLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:eduardohilariodev@pm.me"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <TbMail className="w-6 h-6" />
          </a>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 my-4" />
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <Input placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="space-y-2">
            <Textarea placeholder="Your message" />
          </div>
          <Button
            type="submit"
            className="w-full"
          >
            <TbSend className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
