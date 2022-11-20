<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

class ResetPasswordRequest extends Notification implements ShouldQueue
{
    use Queueable;
    protected $token;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = url('api/reset-password/' . $this->token);
        return (new MailMessage)
            ->line('Bạn nhận được mail này vì bạn đã yêu cầu phục hồi mật khẩu cho tài khoản này')
            ->action('Phục hồi mật khẩu', url($url))
            ->line('Nếu bạn không phải là người yêu cầu thì không cần bấm vào nút phục hồi mật khẩu')
            ->line("Mật khẩu mặc định của bạn sau khi bấm nút phục hồi là 'Cafenguyenchat@12345'");
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
